import {me} from "../../data/index.jsx";

export default function SMIcon({url, children}) {
    return <>
        <a href={url}
           target="_blank" rel="noreferrer"
           className="inline-block text-5xl px-4"
        >
            {children}
        </a>
    </>;
}