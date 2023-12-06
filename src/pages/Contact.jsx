import { Suspense, useRef, useState } from "react"
import  emailjs  from "@emailjs/browser";
import Fox from "../models/Plane"
import Loader from "../Components/Loader"
import { Canvas } from "@react-three/fiber";



const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  };
  const handleFocus = ()=>{
  };
  const handleBlur = ()=>{};
  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
     'service_vj5cq8l',
      'template_9jhjori',
      {
        from_name:form.name,
        to_name:"Abishek",
        from_email:form.email,
        to_email:"anilabishek@gmail.com",      
        message:form.message
      },
      'NVhsrWDzPJVBQJFu4'
    ).then(()=>{
      setIsLoading(false);

      setForm({name:'',email:'',message:''})
    }).catch((error)=>{
      setIsLoading(false);
      console.log(error);

    })
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">Get in Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14"onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input type="text" name="name" className="input" placeholder="John doe"
            required value={form.name} 
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}/>
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input type="email" name="email" className="input" placeholder="john@gmail.com"
            required value={form.email} 
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}/>
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea  name="message" className="textarea" placeholder="Let me know how I can help you!"
            required value={form.message} 
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}/>
          </label>
          <button type="submit" className="btn"
                 disabled={isLoading}
                 onFocus={handleFocus}
                 onBlur={handleBlur}>
                  {isLoading ? 'Sending' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas>
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={0.5}/>
        <Suspense fallback={<Loader/>}>
           <Fox  rotation={[12.6,-0.5,-0.4]} scale={[3,3,3]}/>
        </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact