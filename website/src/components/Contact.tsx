"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'
import s from "@/styles/style.module.sass"
import { Button, ConfigProvider, Form, Input, theme } from 'antd';
import { Container } from './ui/Container';
import { Laptop } from '@/store/outline-images/Laptop';
import { cls } from '@/utils';

export default function Contact() {
    return (

        <motion.section className={cls(s.contact, s.section)}>
            <Container className={s.container}>
                <h3>Ready to see the power of <span className={s.text_primary}>Bluesky Creations</span>  in action?</h3>
                <p>Contact us today to schedule a demo and discover how we can help you optimize your business</p>
                <div className={s.contact_container}>
                    <div className={s.image}>
                        <Laptop />
                    </div>
                    <ContactForm />
                </div>

            </Container>
            <Footer />
        </motion.section>

    )
}


const ContactForm = () => {
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Success:', values);

    };

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: { colorPrimary: '#1890ff' }
            }}
        >
            <Form
                form={form}
                layout='vertical'
                className={s.contact_form}
                onFinish={onFinish}
                variant="filled"
            >
                <h4 style={{ textAlign: "left" }}>Get in touch</h4>
                <Form.Item name={"name"} label={"Name"}>
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item name={"email"} label="Email">
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name={"subject"} label="Subject">
                    <Input placeholder="Subject" />
                </Form.Item>
                <Form.Item name={"message"} label="Message">
                    <Input.TextArea placeholder="Message" />
                </Form.Item>
                <Button
                    htmlType='submit'
                    type='primary'
                    size='large'
                    shape='round'
                >Submit</Button>
            </Form>
        </ConfigProvider>
    )
}