export const LandingHeader= () =>{
    return (
    <header>
        <span className="LoginBox">
            <a href="login">login</a>
            <a href="register">register</a>
        </span>
        <h1 className="title">URL Shortener</h1>
    </header>
    )
  }

export const LandingBody= () =>{
    return (
            <main>
                <section className="url-container">
                    <h1 className="subtitle">url to be shortened</h1>
                    <form style={{"textAlign": "center"}}>
                    <div className="input-container">
                    <input placeholder="www.google.com" type="text"/>
                    <button className="button">Acortar URL</button>
                    </div>
                    </form>
                    <p className="description">
                    ShortURL is a free tool to shorten URLs and generate short links
                    URL shortener allows to create a shortened link making it easy to share
                    </p>
                </section>
                <LandingDescription/>
                </main>
                )}

export const LandingDescription=()=>{
return (
                
                <div className="description-2">
                <h1>Simple and fast URL shortener!</h1>
                <p>
                ShortURL allows to shorten long links from <a href="https://www.instagram.com/">Instagram</a>, <a href="https://www.facebook.com/">Facebook</a>, <a href="https://www.youtube.com/">YouTube</a>, <a href="https://x.com/">Twitter</a>, <a href="https://www.linkedin.com/">Linked In</a>, <a href="https://www.whatsapp.com/">WhatsApp</a>, <a href="https://www.tiktok.com/">TikTok</a>, blogs and sites. Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check how many clicks it received.
                </p>
                </div>
        )}