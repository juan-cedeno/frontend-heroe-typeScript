import ContentLoader from "react-content-loader"

const Skeletorcard = (props : any) => (
     <ContentLoader 
       speed={2}
       width={600}
       height={1000}
       viewBox="0 0 600 1000"
       backgroundColor="#333"
       foregroundColor="#ecebeb"
       {...props}
     >
       <rect x="345" y="36" rx="6" ry="6" width="221" height="15" /> 
       <rect x="5" y="17" rx="4" ry="4" width="315" height="277" /> 
       <rect x="346" y="69" rx="6" ry="6" width="221" height="15" /> 
       <rect x="346" y="101" rx="6" ry="6" width="221" height="15" /> 
       <rect x="345" y="138" rx="6" ry="6" width="221" height="15" /> 
       <rect x="348" y="169" rx="4" ry="4" width="99" height="46" />
     </ContentLoader>
   )
   export default Skeletorcard