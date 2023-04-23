import React from 'react';
import { FormProps } from '../interfaces/form';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Textarea, Button, createStyles } from '@mantine/core';
import { FormLabel } from '../../view/components/Forms/FormLabel';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const useStyles = createStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
}));

export interface AddTicketsFormValues {
    email: string;
    title: string;
    description: string;
    price: string;
    amount: number;
    supplier: string;
}

const defaultValues: AddTicketsFormValues = {
    email: '',
    title: '',
    description: '',
    price: '',
    amount: 1,
    supplier: '',
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
    email:  yup.string().email().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().typeError('price must be a number').required(),
    amount: yup.number().typeError('amount must be a number').required(),
    supplier: yup.string().required(),
});

export const AddTicketsForm = ({ onSubmit }: FormProps<AddTicketsFormValues>) => {

    const { control, handleSubmit, formState } = useForm<AddTicketsFormValues>({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(schema),
    });
    const { errors } = formState;
    const { classes } = useStyles();

    return (
        <Grid>
            <Grid.Col span={12}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Email</FormLabel>
                                <Input.Wrapper error={errors.email?.message}>
                                    <Input onChange={onChange} value={value} name={name} />
                                </Input.Wrapper>

                            </>
                        );
                    }}
                />
            </Grid.Col>


            <Grid.Col span={12}>
                <Controller
                    name="title"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Title</FormLabel>
                                <Input.Wrapper error={errors.title?.message}>
                                    <Input onChange={onChange} value={value} name={name} />
                                </Input.Wrapper>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="description"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Description</FormLabel>
                                <Textarea onChange={onChange} value={value} name={name} />
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="price"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Price</FormLabel>
                                <Input.Wrapper error={errors.price?.message}>
                                    <Input  type="number" onChange={onChange} value={value} name={name} />
                                </Input.Wrapper>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="amount"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Amount of tickets</FormLabel>
                                <Input.Wrapper error={errors.amount?.message}>
                                    <Input  type="number" onChange={onChange} value={value} name={name} />
                                </Input.Wrapper>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="supplier"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Supplier</FormLabel>
                                <Input.Wrapper error={errors.supplier?.message}>
                                    <Input onChange={onChange} value={value} name={name} />
                                </Input.Wrapper>
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12} className={classes.buttonContainer}>
                <Button onClick={handleSubmit(onSubmit)}>Add tickets</Button>
            </Grid.Col>
        </Grid>
    );
};
