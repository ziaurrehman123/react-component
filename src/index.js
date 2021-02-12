import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App =()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
            <h1>this is test headung</h1>
            </div>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author={faker.company.companyName()} 
            timeAgo="Today at 4:00 AM" 
            authorImage={faker.image.image()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author={faker.company.companyName()} 
            timeAgo="Today at 4:00 AM" 
            authorImage={faker.image.image()}
            />
            </ApprovalCard>
            <CommentDetail 
            author={faker.company.companyName()} 
            timeAgo="Today at 4:00 AM" 
            authorImage={faker.image.image()}
            />
             <CommentDetail 
            author={faker.company.companyName()} 
            timeAgo="Today at 4:00 AM" 
            authorImage={faker.image.image()}
            />
              </div>

    );
}

ReactDOM.render(<App />, document.querySelector('#root'));