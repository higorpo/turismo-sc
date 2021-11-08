import { useEffect, useState } from "react";
import { IAtracao } from "../../../types/Atracoes";

export function useAtracoes(): [IAtracao[], boolean] {
    const [data, setData] = useState<IAtracao[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);

        fetch('http://10.1.1.107:3000/atracoes?_expand=tiposAtracoes')
            .then((response) => response.json())
            .then((response) => {
                setData(response);
                setLoading(false);
            });
    }, []);

    return [data, loading];
}