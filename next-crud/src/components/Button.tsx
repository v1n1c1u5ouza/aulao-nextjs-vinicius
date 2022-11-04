interface ButtonProps {
    cor?: 'purple' | 'blue' | 'gray'
    className?: string
    children?: any
}

export default function Button(props: ButtonProps) {
    const cor = props.cor  ?? "purple"
    return (
        <button className={`
            bg-gradient-to-r from-${cor}-600 to-${cor}-800
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}