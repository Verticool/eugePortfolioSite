import './modalContact.sass'
import { useForm } from 'react-hook-form';
import { useEffect, useRef } from 'react';
const ModalContact = ({ isOpen, onClose, ref }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    // const formRef = useRef();

    // useEffect(() => {
    //     console.log(formRef);

    //     const handleClick = (e) => {
    //         console.log(e.target)
    //         if (formRef.current && e.target !== formRef.current.contains(e.target)) {
    //             onClose()
    //         } else { }
    //     }
    //     window.addEventListener('click', handleClick);
    //     return () => { window.removeEventListener('click', handleClick); }
    // }, [onClose]);


    return (
        <form className={isOpen ? "form-modal" : null}
            onSubmit={handleSubmit(onSubmit)}
            style={isOpen ? { opacity: '1' } : { opacity: '0', left: '-200%' }} >
            <span className={'closeBtn'} onClick={(onClose)}>
                <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1"
                    viewBox="0 0 512 512" xmlnspace="preserve">
                    <g>
                        <g>
                            <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
			512,452.922 315.076,256 		"/>
                        </g>
                    </g>
                </svg>
            </span>
            <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 40 })} />
            {errors.Name?.type === 'required' && <p role="alert">First name is required</p>}
            <input type="text" placeholder="Mail" {...register("Mail", { required: true, pattern: /^\S+@\S+$/i })}
                aria-invalid={errors.Mail ? "true" : "false"}
            />
            {errors.Mail?.type === 'required' && <p role="alert">Email is required</p>}
            <textarea type="text" placeholder="Message" {...register("Message", { maxLength: 200 })} />

            <input type="submit" style={{ cursor: 'pointer' }} />
            <div className='checkbox_container'>
                <div className="pretty p-default p-curve">
                    <input type="checkbox" />
                    <div className="state">
                        <label>I accept all <a href="asd">terms</a></label>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ModalContact;