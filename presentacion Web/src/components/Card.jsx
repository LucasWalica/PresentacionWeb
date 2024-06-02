export default function Card({image, title, text}){
    const imgStyle= {
        width:'200px',
        height:'200px'
    };
    return(
        <div className="text-center content-center bg-emerald-950 m-2 rounded-md">
            <h1>{title}</h1>
            <center>
                <img className="rounded-lg" style={imgStyle} src={image}></img>
            </center>
            <p className="m-2 text-left">{text}</p>
        </div>
    )
}