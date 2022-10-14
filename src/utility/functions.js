export const getImageRoute = (imagename) => {
    // later this should be changed to directly accept env variables
    return `/assets/${imagename}`;
}
