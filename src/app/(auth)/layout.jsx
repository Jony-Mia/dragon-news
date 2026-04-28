import Header from '@/component/Header';

const AuthPage = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default AuthPage;