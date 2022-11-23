import React from 'react';
import styles from "./FormControl.module.css"


export const FormControl: React.FC<any> = ({input, meta, child, ...props}) => {

    const hasError = meta.error && meta.visited

    return (
        <div className={styles.formControl + " " +  (hasError ? styles.error : "")}>
            <div>
                {props.children}
               {/* <textarea {...input} {...props}></textarea>*/}
            </div>
            {
                hasError &&  <span>{meta.error}</span>
            }
        </div>
    );
};

export const Textarea: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input: React.FC<any> = (props) => {
    const {input, meta, child,  ...restProps} = props
    return <FormControl {...props}><input {...input}  {...restProps}/></FormControl>
}
