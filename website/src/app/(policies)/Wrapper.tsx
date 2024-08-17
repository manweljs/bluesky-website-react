"use client";
import React, { useEffect, useState } from 'react';
import s from './Legal.module.sass'
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

interface Props {
    children: React.ReactNode;

}

export default function Wrapper({ children }: Props) {
    const [toc, setToc] = useState<string[]>([]);

    useEffect(() => {
        // Mengubah teks pada elemen h2
        document.querySelectorAll('h2').forEach((element: any) => {
            element.textContent = element.textContent
                ?.toLowerCase()
                .replace(/^\w/, (c: string) => c.toUpperCase());
        });
    }, []);

    useEffect(() => {
        const headers = document.querySelectorAll('h2');
        const tocList: string[] = [];

        headers.forEach((header) => {
            if (header.parentElement?.tagName !== 'SECTION') {
                const section = document.createElement('section');
                let sibling = header.nextElementSibling;

                header.parentNode?.insertBefore(section, header);
                section.appendChild(header);

                while (sibling && sibling.tagName !== 'H2') {
                    const nextSibling = sibling.nextElementSibling;
                    section.appendChild(sibling);
                    sibling = nextSibling;
                }
            }

            tocList.push(header.textContent || '');
        });

        setToc(tocList);
    }, []);

    const handleClickToc = (title: string) => {
        const element = document.querySelectorAll(`h2`);

        element.forEach((el) => {
            if (el.textContent === title) {
                const navbarHeight = document.querySelector('#navbar')?.clientHeight || 0;
                const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navbarHeight - 80;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });

    }

    useEffect(() => {
        // Membungkus tabel dengan div.table-wrapper jika belum dibungkus
        document.querySelectorAll('table').forEach((table: any) => {
            // Periksa apakah tabel sudah memiliki pembungkus
            if (!table.parentNode?.classList.contains(s.table_wrapper)) {
                const wrapper = document.createElement('div');
                wrapper.className = s.table_wrapper; // Sesuaikan nama kelas berdasarkan CSS module kamu
                table.parentNode?.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            }
        });
    }, []);

    return (
        <Section className={s.section} >
            <Container className={s.policies_wrapper}>
                <ul className={s.toc}>
                    {toc.map((title, index) => (
                        <li key={index}
                            onClick={() => handleClickToc(title)}
                        >{title}</li>
                    ))}
                </ul>
                <div className={`${s.contents} content`}>
                    {children}
                </div>
            </Container>
        </Section>
    );
}
