import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (

        <div className="grid lg:grid-cols-2 container md:mt-20 my-3 gap-10 md:gap-20" >
            {children}
            <div className="lg:flex justify-center items-center hidden">
                <Image src="/login.png" width={400} height={400} alt="login-form-image" quality={100} />
            </div>
        </div>


    );
};

export default AuthLayout;