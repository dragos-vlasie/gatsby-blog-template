import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import FadeIn from '../elements/FadeIn';
import Content from '../layouts/Content';
import Button from '../elements/Button';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -8rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: -8rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: -8rem 1rem 1rem 1rem;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  margin: 2rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 2rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 2rem 1rem 1rem 1rem;
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Antrenamente'} />
      <Header title="MuschiLaGreu.ro">Fii mai puternic decat scuzele tale</Header>
      <FadeIn>
        <PostWrapper>
          {edges.map(({ node }) => {
            const { id, excerpt, frontmatter } = node;
            const { cover, path, title, date, tags } = frontmatter;
            const tagsPath = tags ? '/' + tags : '';
            const subCategoryPath = frontmatter.subCategory ? '/' + frontmatter.subCategory : '';
            return (
              <PostList
                key={id}
                cover={cover.childImageSharp.fluid}
                path={`/${tagsPath}${subCategoryPath}${path}/`}
                title={title}
                date={date}
                excerpt={excerpt}
              />
            );
          })}
        </PostWrapper>
      </FadeIn>
      <Content input={html} page={true} />
      <CenterContainer>
        <Button to="/program/5x5" type="primary" role="button">
          Click sa acesati Programul Antrenamente 5x5
        </Button>
      </CenterContainer>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" }, frontmatter: { published: { eq: true } } }
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 85, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

const html =
  '<h2>Cum mi-am marit squat-ul de la 90kg la 140kg in 7 luni</h2><p><strong>Iata care este adevarul despre cresterea in forta in 2020:</strong></p><p>Majoritatea barbatilor isi pierd timpul facand MUULT prea multe antrenamente, exercitii si seturi.</p><p>Ei cred ca„ daca fac acelasi antrenament pe care il face tipul cel mare din sala de sport, vor fi si la fel de mari si puternici”</p><p>Dar asta functioneaza rar...</p><p>Baietii mari de obicei se antreneaza de ani buni (si deseori folosesc droguri). Acestia pot suporta o sarcini de munca mai mare decat majoritatea celor ce sunt naturali.</p><p>Copierea antrenamentelor lor este ca si cum ai incerca sa alergi un maraton atunci cand nu poti nici sa parcurgi 6 km. Vei face febra musculara, probabil te vei acidenta si, in cele din urma, vei fi descurajat si vei renunta.</p><p>Daca sunteti determinati si vreti sa fiti puternici, trebuie sa stapaniti mai intai elementele de baza. Aveti nevoie de un plan, cu o progresie logica, care sa se concentreze pe exercitiile de baza.</p><p>In caz contrar, veti pierde timpul la antrenamente si exercitii aleatorii, in speranta ca veti deveni puternici, dar va alegeti doar cu febra musculara(sau mai rau, acidentari).</p><p>Asa ca va voi arata un program pe care mii de oameni l-au folosit pentru a-si creste rapid Squat, Bench si Deadlift.</p><p>De fapt, eu am folosit acest program ("Antrenamente 5x5”) pentru a-mi creste Squat de la 90kg la 140kg, Bench la 120kg si Deadlift la 180kg… in numai 8 luni.</p><p>Am reusit sa ajung la Squat de 140kg dupa numai 7 luni</p><p>Cea mai buna parte? Sunt doar 3 exercitii, 3x / saptamana, 45min pe antrenament.</p><p>Acest program este o munca grea. Dar este simplu, eficient si usor de urmat. Este, de asemenea, cel mai rapid mod pe care l-am descoperit pentru a mi creste rapid puterea.</p><p>Daca doriti sa incercati Antrenamente 5x5  gratuit, da ti click pe butonul de mai jos pentru a avea acces instantaneu la programul meu de antrenament.</p>';
