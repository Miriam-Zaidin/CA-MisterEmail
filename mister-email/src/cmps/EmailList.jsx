import { Link } from "react-router-dom";

export function EmailList({ emails, onRemoveEmail }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>from</th>
                    <th>subject</th>
                    <th>sent at</th>
                </tr>
            </thead>
            <tbody className="email-table">
                {emails.map(email =>

                    <tr key={email.id}>
                        <Link to={`/email/${email.id}`}>

                            <td>{email.from}</td>
                            <td>{email.subject}</td>
                            <td>{email.sentAt}</td>

                            {/* <EmailPreview email={email} /> */}
                            <td><button onClick={() => onRemoveEmail(email.id)}>X</button></td>
                        </Link>
                    </tr>
                )}
            </tbody>
        </table >
        // <ul className="email-list">
        //     {emails.map(email =>
        //         <li key={email.id}>
        //             <EmailPreview email={email} />

        //             <div className="email-actions">
        //                 <button onClick={() => onRemoveEmail(email.id)}>X</button>
        //             </div>
        //         </li>
        //     )}
        // </ul>
    )
}
