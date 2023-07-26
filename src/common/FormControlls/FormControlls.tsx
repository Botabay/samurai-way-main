import s from './FormControlls.module.css'

const UniForm = ({ meta, children, ...props }: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControlls + (hasError ? ' ' + s.error : '')}>
            {children}
            {hasError && <p>{meta.error}</p>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const { textarea, meta, children, ...restProps } = props
    return (
        <UniForm {...props}>
            <textarea {...textarea} {...restProps} />
        </UniForm>
    )
}

export const Input = (props: any) => {
    const { input, meta, children, ...restProps } = props
    return (
        <UniForm {...props}>
            <input {...input} {...restProps} />
        </UniForm>
    )
}