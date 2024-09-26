export default function ListElement({ children, id, href }) {
    return (
        <li
            key={id}
            className=" gap-x-6 p-5 hover:cursor-pointer hover:bg-gray-200 first:rounded-t-lg last:rounded-b-lg"
        >
            <a href={href} className="flex justify-between">
                {children}
            </a>
        </li>
    );
}
