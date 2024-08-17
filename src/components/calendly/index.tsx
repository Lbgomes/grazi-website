import React, { useEffect } from "react";
import * as S from "./styles";
const CalendlyEmbed = ({ url }: { url: string }) => {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head!.appendChild(script);
    }, []);

    return (
        <S.Container
            className="calendly-inline-widget"
            data-url={url}
        ></S.Container>
    );
};

export default CalendlyEmbed;