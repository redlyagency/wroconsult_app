// import React from "react"
// import { graphql } from "gatsby"

// import Layout from "../components/base/layout"

// import {
//   PageWrapper,
//   OurProjectComponentTableWrapper,
//   TableStyled,
//   TheadStyled,
//   TheadStyledText,
//   TbodyStyled,
//   TrStyled,
//   ThStyled,
//   TdStyled,
// } from "../styles/naszeProjekty.style"

// import { Headers } from "../utils/data/headersData"

// import H1 from "../components/headers/h1"

// const NaszeProjektyPage = ({ data }) => {
//   const table = data.allDatoCmsTable.edges

//   return (
//     <Layout>
//       <PageWrapper>
//         <H1
//           name={ Headers.NaszeProjekty }
//         />
//         <div style={{padding: '0 25px 0 25px'}}>
//           <OurProjectComponentTableWrapper>
//             <TableStyled>
//                 <TheadStyled>
//                     <TrStyled>
//                         <ThStyled>
//                             <TheadStyledText>Nazwa projektu</TheadStyledText>
//                         </ThStyled>
//                         <ThStyled>
//                             <TheadStyledText>Odbiorca</TheadStyledText>
//                         </ThStyled>
//                         <ThStyled isRed>
//                             <TheadStyledText isRed>Wartość projektu</TheadStyledText>
//                         </ThStyled>
//                         <ThStyled>
//                             <TheadStyledText>Źródło finansowania</TheadStyledText>
//                         </ThStyled>
//                     </TrStyled>
//                 </TheadStyled>
//                 <TbodyStyled>
//                   {table.reverse().map(({node}) => {
//                     return (
//                       <TrStyled key={node.id}>
//                         <TdStyled>{node.projectName}</TdStyled>
//                         <TdStyled>{node.receiver}</TdStyled>
//                         <TdStyled isRed>{node.projectValue}&nbsp;PLN</TdStyled>
//                         <TdStyled>{node.foundingSource}</TdStyled>
//                       </TrStyled>
//                     )
//                   })}
//                 </TbodyStyled>
//             </TableStyled>
//           </OurProjectComponentTableWrapper>
//         </div>
//       </PageWrapper>
//     </Layout>
//   )
// }

// export const query = graphql`
//     query MyQuery {
//         allDatoCmsTable {
//             edges {
//             node {
//                 id
//                 projectName
//                 receiver
//                 projectValue
//                 foundingSource
//                 }
//             }
//         }
//     }
// `

// export default NaszeProjektyPage