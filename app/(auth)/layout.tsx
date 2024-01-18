import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="lg:grid lg:grid-cols-2 container my-3 lg:my-28 gap-10 md:gap-20 h-full" >
            <div>
                {children}
            </div>
            <div className="lg:flex justify-center items-center hidden">
                <Image src="/login.png" width={400} height={400} className=" animate-fly" alt="login-form-image" quality={100} />
            </div>
        </section>
    );
};

export default AuthLayout;