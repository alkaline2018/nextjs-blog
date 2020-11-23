import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
// import Alert from "../components/Alert";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// export default function Home ({ allPostsData }) { ... }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {/* <Date dateString={date} /> */}
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
      {/* <section className={utilStyles.headingMd}>
        <div>
          <p>[일상의 지루함]</p>
          <p> 일상은 지루하다. </p>
          <p>매일 비슷한 일들, 나에겐 오지 않는 새로움 그래서 지루하다. 혹자는 말한다. </p>
          <p>일상의 소중함에 대해. 병들고 늙어 단 하루라도 젊은 시절로 돌아갈 수 있다면 행복할 것이라고 하지만 그건 틀렸다. 내가 병들고 늙지 않았는데 어떻게 그렇게 생각하겠는가. 지루함은 재미있다의 반댓말이 아니다. 아무런 자극이 없다 와 비슷한 말이다. 그래서 일상의 틈틈에 우리는 자극을 채운다. 커뮤니티의 글, 유튜브, 뉴스 하지만 자신의 일이 아닌 자극은 쉽게 바스러 사라진다. 그럼 어떻게 지루함을 날릴 수 있을까?</p>
          <p>지루함을 날릴 가장 좋은 방법은 몰두라 생각한다. 몰두는 즐겁다. 게임을 하며 집중할 때 그 순간은 짧지만 강렬하다. 연예인에게 환호할 때 연예인에게 빠진 자신을 사랑하는 경험 또한 잊지 못할 추억이다. 하지만 몰두는 쉬운 경험이 아니다. 그만큼 집중해야하고 몰두할 무언가가 있어야만 가능하기 때문이다. 그렇다면 보통 사람들은 어떻게 지루함을 지울 수 있을까?</p>
          <p>일상에 작은 시도를 더해보게 좋은 방법일 것이다. 예를 들면 매일 출퇴근 할 때 휴대폰은 잠시 접고 관점을 바꿔보자. </p>
          <p>이동수단의 모습을 살펴보자. 사람들을 느껴보자. 왜 이 시간대에 움직이고 많은지 단순하게 생각말고 깊게 생각해보자. 뒷꿈치를 들어 약간의 운동을 해보자. 약간의 시도만으로 삶은 풍부해진다. 추억할 것들이 많아진다. </p>
          <p>걷을 때 왼쪽으로 깽깽이로 걸어본다던가 어릴시절처럼 용암을 상상하던가 나무만 쳐다보며 간다던가 왼쪽만 쳐다보며 움직이는 시도들은 "오늘 하루 어땠어?" 라는 질문에 많은 대답을 만들어준다.</p>
          <p>자 이제 다시 한번 얘기해보자. </p>
          <p>일상은 지루하다. 아니 지루할 수도 있다. </p>
          <p>오늘을 어제와 똑같이 살고 있다면</p>
        <Alert type='error'>sucess</Alert>
        </div>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </section> */}
    </Layout>
  );
}
