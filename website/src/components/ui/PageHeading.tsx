import Image from "next/legacy/image"
import { Container } from "./Container"
import { Section } from "./Section"

import s from "./Ui.module.sass"
import { cls } from "@/utils"

export const PageHeading = ({
    content,
    className
}: {
    content: {
        title: string,
        description: string[] | React.ReactNode[],
        image?: string
    }
    className?: string
}) => {
    return (
        <Section className={cls(s.page_heading, className)} style={{ backgroundImage: `url("/header-background.png")` }}>
            <Container className={s.heading_container} >
                <div className={s.text_box}>
                    <h1>{content.title}</h1>
                    <p>
                        {content.description.map((desc, index) => (
                            <span key={index}>{desc}</span>
                        ))}
                    </p>
                </div>
                {content.image &&
                    <Image width={642} height={500} src={content.image} priority />
                }
            </Container>
        </Section>
    )
}