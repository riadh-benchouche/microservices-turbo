import { CounterButton, Link } from "ui";

export default function BlogId(): JSX.Element {
    return (
        <div className="container">
            <h1 className="title">
                BlogDetails <br />
                <span>Kitchen Sink</span>
            </h1>
            <CounterButton />
            <p className="description">
                Built With <Link href="https://turbo.build/repo">Turborepo</Link>
                {" & "}
                <Link href="https://remix.run/">Remix</Link>
            </p>
        </div>
    );
}
