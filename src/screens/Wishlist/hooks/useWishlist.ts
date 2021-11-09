import { useEffect, useState } from "react";
import { IAtracao } from "../../../types/Atracoes";
import { useWishlistItems } from "./useWishlistItems";

export function useWishlist(): [IAtracao[], boolean] {
    const items = useWishlistItems();
    const itemsParam = items.map(item => `id=${item}`).join('&');

    const [data, setData] = useState<IAtracao[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);

        fetch(`http://10.1.1.107:3000/atracoes?${itemsParam}&_expand=tiposAtracoes`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setData(response);
                setLoading(false);
            });
    }, [itemsParam]);

    return [data, loading];
}