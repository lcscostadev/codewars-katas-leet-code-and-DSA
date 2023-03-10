function NestedList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {item.title}
                    {item.children && <NestedList items={item.children} />}
                </li>
            ))}
        </ul>
    );
}


// In this example, the NestedList component takes an array of items as a prop. Each item has a title property and an optional children property, which is also an array of items. If an item has children, the NestedList component recursively renders another NestedList component for each child.

