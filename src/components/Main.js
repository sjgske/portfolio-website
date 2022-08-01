import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Tag from "./Tag";

const Main = () => {
  return (
    <div className="Main">
      <header className="header">
        <h1>
          안녕하세요
          <br />
          김단헌입니다.
        </h1>
        <p>
          사용자들에게 좋은 인상을 주고 싶은 <strong>프론트엔드 개발자 </strong>
          김단헌입니다. 인터랙티브하고 이용하기 편한 UI를 설계하는 것에 관심이
          많습니다.
        </p>
      </header>

      <section id="project" className="section project">
        <h1>
          <FontAwesomeIcon icon={faCode} className="icon" />
          Project
        </h1>

        <div>
          <h3>팀</h3>
          <div className="item">
            <div className="title">
              <h4>
                <a
                  href="https://github.com/sjgske/elice-hea17h-service"
                  target="_blank"
                  rel="noreferrer"
                >
                  hea17h 식단관리 서비스
                </a>
              </h4>
              <span>2022년 7월 4일 ~ 22일</span>
              <div>
                <Tag>React</Tag>
                <Tag>Redux-toolkit</Tag>
                <Tag>Styled-Components</Tag>
                <Tag>Git</Tag>
              </div>
            </div>
            <div>
              <p>
                프론트엔드를 담당하였고,
                <strong> 효율적인 디자인 시스템 관리</strong>를 위해
                <code>React</code> 프레임워크로 개발하였습니다.
              </p>
              <p>
                식단 목록 페이지를 구현하였고, <strong>UX</strong>와
                <strong> 서비스 속도</strong>를 개선하기 위해
                <code className="kor"> 날짜별 필터링 기능</code>을
                추가하였습니다.
              </p>
              <p>
                <code>REST API</code>와의 비동기 통신으로 데이터를 가공하여
                컴포넌트에 전달하였습니다.
              </p>
              <p>
                Props drilling을 방지하기 위해 <code>Redux-toolkit</code>으로
                상태를 관리하였습니다.
              </p>
              <p>
                컴포넌트 리렌더링을 막기위해 <code>useMemo</code>,
                <code>useCallback</code>으로 최적화하였습니다.
              </p>
              <p>
                CSS in JS의 장점인 <strong>dynamic한 컴포넌트 개발</strong>을
                위해 <code>Styled-Components</code>로 스타일링하였습니다.
              </p>

              <p>
                <code>eslint</code>, <code>prettier</code>로 코드 컨벤션을
                관리하였습니다.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="title">
              <h4>
                <a
                  href="https://github.com/sjgske/elice-shoppingmall"
                  target="_blank"
                  rel="noreferrer"
                >
                  쇼핑몰 프로젝트
                </a>
              </h4>
              <span>2022년 5월 23일 ~ 2022년 6월 3일</span>
              <div>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
                <Tag>JavaScript</Tag>
                <Tag>Git</Tag>
              </div>
            </div>
            <div>
              <p>
                프론트엔드를 담당하여 사용자, 관리자 메뉴 페이지를 구현하였고,
                <code className="kor">반응형 웹</code>을 적용하였습니다.
              </p>
              <p>
                <code>REST API</code>와 <strong>비동기 통신</strong>으로 상품
                추가, 수정, 삭제 기능을 구현하였고, <code>form</code>
                입력값을 처리하였습니다.
              </p>
              <p>
                <code className="kor">로컬스토리지</code>에 JWT 토큰을 저장하는
                로그인 기능을 통해 로그인 상태에 따라 다르게 그려지는 UI를
                구현하였습니다.
              </p>
              <p>
                <strong>다음 주소 api</strong>를 이용하여 사용자 정보 수정 폼을
                구현하였습니다.
              </p>
              <p>
                상단바와 사이드바 UI를 <code className="kor">컴포넌트화</code>
                하여 재사용성을 향상시켰습니다.
              </p>
              <p>
                <code>git flow</code> 전략을 채택하여 협업을 수행하였습니다.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3>개인</h3>
          <div className="item">
            <div className="title">
              <h4>
                <a
                  href="https://github.com/sjgske/emotion-diary-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  감정 일기장
                </a>
              </h4>
              <span>2022년 6월 21일 ~</span>
              <div>
                <Tag>React</Tag>
                <Tag>CSS</Tag>
              </div>
            </div>
            <div>
              <p>
                <strong>리액트 상태관리 hook</strong>을 활용하여 글을 동적으로
                <strong> 추가, 수정, 삭제</strong>하는 기능을 구현하였습니다.
              </p>
              <p>
                버튼과 헤더 UI를
                <code className="kor"> 컴포넌트화</code>
                하여 재사용성을 향상시켰습니다.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="title">
              <h4>
                <a
                  href="https://github.com/sjgske/moonbucks-menu"
                  target="_blank"
                  rel="noreferrer"
                >
                  카페 메뉴 관리 앱
                </a>
              </h4>
              <span>2022년 2월 13일 ~ 2022년 3월 1일</span>
              <div>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
                <Tag>JavaScript</Tag>
              </div>
            </div>
            <div>
              <p>
                <code className="kor">바닐라 자바스크립트</code>로 상태관리를
                구현하였습니다.
              </p>

              <p>
                <code>fetch api</code>를 이용한 비동기 통신으로 메뉴를 추가,
                수정, 삭제 기능을 구현하였습니다.
              </p>
              <p>
                <strong>DOM 이벤트 핸들링</strong>
                으로 품절 메뉴를 표시하는 기능을 구현하였습니다.
              </p>
              <p>
                파일을 기능에 따라 <strong>모듈화</strong>하여 폴더 구조를
                관리하였습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <h1>
          <FontAwesomeIcon icon={faCode} className="icon" />
          Skills
        </h1>
        <ul>
          <li>HTML / CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Typescript</li>
          <li>CSS in JS</li>
          <li>Git</li>
        </ul>
      </section>

      <section id="education" className="section education">
        <h1>
          <FontAwesomeIcon icon={faCode} className="icon" />
          Education
        </h1>
        <div className="item">
          <h4>엘리스 SW 엔지니어 트랙 2기</h4>
          <span>2022년 4월 4일 ~ 7월 22일</span>
        </div>
        <div className="item">
          <h4>전북대학교 신소재공학부</h4>
          <span>2017년 3월 ~ 2022년 2월</span>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h1>
          <FontAwesomeIcon icon={faCode} className="icon" />
          Contact
        </h1>
        <ul>
          <li>
            <a
              className="link"
              href="mailto:eksgjs3847@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://github.com/sjgske"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Main;
