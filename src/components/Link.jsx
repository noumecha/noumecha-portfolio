import "./Link.scss";

function Link({src, title})
{
    return (
        <a
            className="App-link"
            href={src}
            target='_blank'
            rel='noopener noreferrer'
        >
            {title}
        </a>
    );
}

export default Link;