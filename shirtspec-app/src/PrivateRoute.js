import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../src/services/token-service'

export default function PrivateRoute({ component, ...props }) {
    // pass in component as prop
    const Component = component
    return (
        <Route
            {...props} //path
            render={componentProps => (
                TokenService.hasAuthToken()
                    ? <Component {...componentProps} /> //component name
                    : <Redirect
                        to={{
                            //if not authorized, redirect to landing page
                            pathname: '/',
                            state: { from: componentProps.location }
                            }}
                        />
            )}
        />
    )
}

{/* <PrivateRoute
    path={'/example/:exampleId'}
    component={ComponentName}
/> */}