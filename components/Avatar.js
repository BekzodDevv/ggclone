function Avatar({url, className}) {
    return (
        <div>
            <img 
            src={url} 
            alt="avatar"
            className={`h-10 rounded-full cursor-pointer 
            transition duration-150 transform hover:scale-110
            ${className}`}
            loading="lazy"
            />
            
        </div>
    )
}

export default Avatar
 