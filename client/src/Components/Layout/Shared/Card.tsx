interface CardProps {
    children: React.ReactNode
    className: string
}

export default function Card({children, className}: CardProps):JSX.Element {
    return (
        <section className={className}>
            {children}
        </section>
    )
}