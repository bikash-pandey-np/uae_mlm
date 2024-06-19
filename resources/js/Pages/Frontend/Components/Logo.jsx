

const Logo = () => {
    return (
        <a href={route('homepage')} 
        className="flex items-center text-white text-lg font-semibold"
        style={{ 'color': '#ff4949' }}>
        The <span className=''>Capex</span> <sup className=''>Pro</sup>
    </a>
    );
}

export default Logo;