import logo from '../assets/coding.png';
export default function Header() {
    return (
    <header id="header">
        <img src={logo} alt='logo'></img>
        <h1>Welcome</h1>
    </header>
    );
}