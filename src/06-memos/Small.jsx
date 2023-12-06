import { memo } from "react";

//solo si cambia la property se reenderiza el componente

export const Small = memo( ({value}) => {

    console.log('Me volví a dibujar');
    return (
        <>
            <small>{value}</small>
        </>
    )
})
