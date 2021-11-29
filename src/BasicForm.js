import { Formik } from "formik";
export function BasicForm() {
    return (
        <div>
            <Formik initialValues={{email:"" ,  password:""}}>
                
            </Formik>
        </div>
    )
}