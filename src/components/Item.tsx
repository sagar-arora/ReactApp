interface ItemProps {
    itemName: string;
    removeItem: (name: string) => void;
    index: number;
}

export default function Item(props: ItemProps) {
    return (
        <div className="item">
            <label>
                {props.itemName}
                <input type="button" value="delete" onClick={() => props.removeItem(props.itemName)} />
            </label>
        </div>
    );
}