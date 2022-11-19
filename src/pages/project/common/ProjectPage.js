import React from 'react'
import "./projectpage.scss"

class ProjectPage extends React.Component{
    render() {
        const childrenWithProps = React.Children.map(this.props.children, child => {
            // checking isValidElement is the safe way and avoids a typescript error too
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { doSomething: this.doSomething });
            }
            return child;
        });
        return <div className={'project-page'}>
            {childrenWithProps}
        </div>;
    }
}

export default ProjectPage;