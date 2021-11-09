import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

export default function useIsAddedWishlist(id: number): [boolean, Function, Function] {
    const { getItem, setItem } = useAsyncStorage('wishList');
    const [isAdded, setIsAdded] = useState<boolean>(false);
    const [wishListItems, setWishListItems] = useState<number[]>([]);

    useEffect(() => {
        async function execute() {
            const items = await getItem();

            if (items) {
                const parsedItems: Array<number> = JSON.parse(items);
                setWishListItems(parsedItems);
                setIsAdded(parsedItems.includes(id));
            }
        }

        execute();
    }, []);

    const add = useCallback(async () => {
        wishListItems.push(id);

        setItem(JSON.stringify(wishListItems));
        setIsAdded(true);
    }, [wishListItems]);

    const remove = useCallback(async () => {
        wishListItems.splice(wishListItems.findIndex(items => items === id), 1);

        setItem(JSON.stringify(wishListItems));
        setIsAdded(false);
    }, [wishListItems]);

    return [isAdded, add, remove]
}