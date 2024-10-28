import './homeLayout.css';

export default function HomeLayout({
    
    intro, 
    user,
}: {
    children: React.ReactNode;
    intro: React.ReactNode;
    user: React.ReactNode;
}) {
    return (
        <div className="home-container">
            <div className="intro-container">{intro}</div>
            <div className="user-container">{user}</div>
        </div>
    )
}