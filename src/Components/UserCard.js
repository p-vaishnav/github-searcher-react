import Reacr from 'react';

import {
    Card,
    CardBody
} from 'reactstrap';

const UserCard = function({user}){

    return(
        <Card>
            <img src={user.avatar_url} className="rounded" />
            <CardBody>
                    <div>{user.login}</div>
                    <div>Public repos : {user.public_repos}</div>
                    <div>Hireable : {user.hireable ? 'YES' : 'NO'}</div>
                    <div>Followers : {user.followers}</div>
            </CardBody>
        </Card>
    );
}

export default UserCard;