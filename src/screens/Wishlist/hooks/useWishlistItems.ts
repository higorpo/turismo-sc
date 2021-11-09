import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useWishlistItems(): Array<number> {
    const { getItem } = useAsyncStorage('wishList');
    const [wishListItems, setWishListItems] = useState<number[]>([]);

    useEffect(() => {
        async function execute() {
            const items = await getItem();

            if (items) {
                const parsedItems: Array<number> = JSON.parse(items);
                setWishListItems(parsedItems);
            }
        }

        execute();
    }, []);

    return wishListItems;
}