<script>
import axios from "axios";

export default {
  name: "MyProfile",
  data() {
    return {
      githubPhoto: 'https://avatars.githubusercontent.com/u/44632846?v=4',
      githubBio: 'Preparing....',
      githubRepos: []
    }
  },
  methods: {
    fetchAccountData() {
      return axios.get(`https://api.github.com/users/iamhimansu`)
          .then(res => {
            this.githubPhoto = res.data.avatar_url;
            this.githubBio = res.data.bio;
          })
          .catch(() => {
            this.githubPhoto = 'https://avatars.githubusercontent.com/u/44632846?v=4'
          });
    },
    fetchRepos() {
      return axios.get(`https://api.github.com/users/iamhimansu/repos?sort=created&direction=desc`)
          .then(res => {
            this.githubRepos = res.data;
          })
          .catch(() => {
            this.githubRepos = []
          });
    },
    formatDate(timestamp) {
      const options = {year: 'numeric', month: 'long', day: 'numeric'};
      const date = new Date(timestamp); // Convert the timestamp to milliseconds
      return date.toLocaleDateString('en-US', options);
    }
  },
  beforeMount() {
    this.fetchAccountData()
    this.fetchRepos()
  }
}

</script>

<template>
  <div class="min-h-screen md:h-full w-full">
    <div class="flex flex-col-reverse md:flex-row justify-center">
      <div class="w-full md:w-1/2 md:p-16 md:h-screen">
        <div class="flex flex-col text-center md:text-left">
          <div class="md:ml-4 font-crimson w-full md:w-24 p-4 md:bg-black md:text-white text-5xl font-extrabold dark:text-gray-300">
            Hi,
          </div>
          <div class="md:mt-1 p-4 font-bold text-3xl font-crimson dark:text-gray-300">
            My name is <a class="font-bold text-3xl font-crimson underline-offset-4 underline"
                          href="https://github.com/iamhimansu"
                          target="_blank">Himanshu Raj Aman</a>
          </div>
          <div class="font-bold px-4 text-4xl font-crimson dark:text-gray-300">
            I <span class="italic font-crimson">design</span> and develop webapps
          </div>
        </div>
        <div class="font-bold px-4 mt-3 text-xl font-crimson dark:text-gray-500">{{ githubBio }}</div>

      </div>
      <div class="w-full md:w-1/2">
        <div class="flex flex-col justify-center items-center md:h-screen mt-8 md:-mt-16">
          <img alt="my-photo" class="rounded-full w-52" src="https://avatars.githubusercontent.com/u/44632846?v=4">
        </div>
      </div>
    </div>
    <div class="md:p-16 p-4">
      <div v-if="githubRepos.length>0">
        <h1 class="text-4xl font-crimson font-bold dark:text-gray-300">Projects ({{ githubRepos.length }})</h1>
        <div class="flex flex-row w-full justify-evenly flex-wrap my-4">
          <div v-for="(repoData, index) in githubRepos" :key="index" class="w-full md:w-1/3 lg:w-1/4">
            <a :href="repoData.html_url" target="_blank">
              <div
                  class="flex flex-col md:flex-row w-full h-24 dark:hover:bg-slate-900 border p-4 dark:border-slate-900 md:p-2 md:hover:shadow-md md:hover:cursor-pointer">
                <div class="flex flex-col w-56">
                  <div class="article-title mb-1">
                    <h2 class="text-xs line-clamp-2 font-bold leading-tight dark:text-gray-400">{{ repoData.name }}</h2>
                  </div>
                  <div class="article-description line-clamp-3 mb-1">
                    <h4 class="text-[10px] font-bold text-gray-500">
                      {{ repoData.description }}
                    </h4>
                  </div>
                  <div class="article-created-at">
                    <h4 class="text-[9px] font-bold text-gray-400">
                      {{ formatDate(repoData.created_at) }}
                    </h4>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div v-else>
        <h1 class="font-bold text-xl font-mono my-5">
          Fetching...
        </h1>
      </div>
    </div>
    <div class="md:p-16">
      <h1 class="font-bold text-4xl font-crimson p-8 md:p-0 mb-3 dark:text-gray-300">About me</h1>
      <div class="bg-midnight text-slate-500 h-auto font-mono w-screen code-wrap py-6 px-4 md:w-full">
        <div class="line">
          <div class="keywords">
            class
          </div>
          &nbsp;<div class="class-name">
          Developer
        </div>
          &nbsp;<div class="keywords">
          extends
        </div>
          &nbsp;<div class="class-name">
          Web
        </div>
          &nbsp;<div class="scope-brackets">{</div>
        </div>

        <div class="line">
          <div class="keywords">
            &emsp;constructor
            <div class="parenthesis">(</div>
            <div class="parenthesis">)</div>
            <div class="scope-brackets"> {</div>
          </div>
        </div>
        <div class="line">
          <div class="keywords">
            &emsp;&emsp;this
          </div>
          <div class="dot-child">.</div>
          <div class="props">name</div>
          <div class="assign">&nbsp;=&nbsp;</div>
          <div class="strings"> 'Himanshu Raj Aman'</div>

        </div>
        <div class="line">
          <div class="keywords">
            &emsp;&emsp;this
          </div>
          <div class="dot-child">.</div>
          <div class="props">age</div>
          <div class="assign">&nbsp;=&nbsp;</div>
          <div class="int"> 1033948800</div>
          &emsp;<div class="comments"> // 21 years</div>
        </div>
        <div class="line">
          <div class="keywords">
            &emsp;&emsp;this
          </div>
          <div class="dot-child">.</div>
          <div class="props">email</div>
          <div class="assign">&nbsp;=&nbsp;</div>
          <div class="strings"> 'iamhimanshu7102@gmail.com'</div>
        </div>
        <div class="line">
          <div class="scope-brackets">
            &emsp;}
          </div>
        </div>
        <div class="line">
          <div class="methods">
            &emsp;workExperience
          </div>
          <div class="parenthesis">()</div>
          <div class="scope-brackets">{</div>
        </div>
        <div class="line">
          <div class="keywords">&emsp;&emsp;&emsp;&emsp;return</div>
          <div class="default-brackets">[</div>
        </div>
        <div class="line">
          <div class="scope-brackets">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</div>
          <div class="props">'2022-now'</div>
          <div class="default-tokens">:</div>
          <div class="strings">
            'Project Samarth, Software Developer'
          </div>
          <div class="scope-brackets">}</div>
          <div class="default-tokens">,</div>
        </div>
        <div class="line">
          <div class="scope-brackets">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</div>
          <div class="props">'11/2021-02/2022'</div>
          <div class="default-tokens">:</div>
          <div class="strings">
            'BlogFlirt, Full Stack Developer'
          </div>
          <div class="scope-brackets">}</div>
          <div class="default-tokens">,</div>
        </div>
        <div class="line">
          <div class="scope-brackets">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</div>
          <div class="props">'08/2020-11/2020'</div>
          <div class="default-tokens">:</div>
          <div class="strings">
            'Notebook Nation, Backend Developer'
          </div>
          <div class="scope-brackets">}</div>
          <div class="comments">&emsp;&emsp; // Indent not proper</div>
          <div class="default-tokens">,</div>
        </div>
        <div class="line">
          <div class="default-brackets">&emsp;&emsp;&emsp;&emsp;&emsp;]</div>
          <div class="default-tokens">;</div>
        </div>
        <div class="line">
          <div class="default-brackets">&emsp;&emsp;}</div>
          <div class="default-tokens">;</div>
        </div>
        <div class="line">
          <div class="methods">
            &emsp;education
          </div>
          <div class="parenthesis">()</div>
          <div class="scope-brackets">{</div>
        </div>
        <div class="line">
          <div class="keywords">
            &emsp;&emsp;&emsp;&emsp;return
            <div class="default-brackets">[</div>
          </div>
        </div>
        <div class="line">
          <div class="scope-brackets">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</div>
          <div class="props">'2019-2022'</div>
          <div class="default-tokens">:</div>
          <div class="strings">
            'Bachelor's In Computer Applications [IGNOU]'
          </div>
          <div class="scope-brackets">}</div>
          <div class="default-tokens">,</div>
        </div>
        <div class="line">
          <div class="scope-brackets">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</div>
          <div class="props">'2018-2021'</div>
          <div class="default-tokens">:</div>
          <div class="strings">
            'B.Sc Physics (Hons.) [A.N College]'
          </div>
          <div class="scope-brackets">}</div>
          <div class="default-tokens">,</div>
        </div>
        <div class="line">
          <div class="scope-brackets">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{</div>
          <div class="props">'2016-2018'</div>
          <div class="default-tokens">:</div>
          <div class="strings">'Class XIIth from St. Michaels's High School'</div>
          <div class="scope-brackets">}</div>
          <div class="default-tokens">,</div>
        </div>
        <div class="line">
          <div class="default-brackets">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{
          </div>
          <div class="props">'2015-2016'</div>
          <div class="default-tokens">:</div>
          <div class="strings">'Class Xth from St. Michaels's High School'</div>
          <div class="scope-brackets">}</div>
        </div>
        <div class="line">
          <div class="default-brackets">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;]</div>
          <div class="default-tokens">;</div>
        </div>
        <div class="line">
          <div class="default-brackets">&emsp;&emsp;}</div>
          <div class="default-tokens">;</div>
        </div>
        <div class="line">
          <div class="methods">
            &emsp;skills
          </div>
          <div class="parenthesis">()</div>
          <div class="scope-brackets">{</div>
        </div>
        <div class="line">
          <div class="keywords">
            &emsp;&emsp;&emsp;&emsp;return
            <div class="default-brackets">[</div>
          </div>
        </div>
        <div class="line">
          &emsp;&emsp;&emsp;&emsp;
          <div class="strings">'HTML/CSS/JS'</div>
          <div class="default-tokens">,</div>
          <div class="strings">'Vue Js'</div>
          <div class="default-tokens">,</div>
          <div class="strings">'PHP'</div>
          <div class="default-tokens">,</div>
          <div class="strings">'Bootstrap/Tailwind'</div>
          <div class="default-tokens">,</div>
          <div class="strings">'Alpine Js'</div>
          <div class="default-tokens">,</div>
        </div>
        <div class="line">
          &emsp;&emsp;&emsp;&emsp;<div class="strings">'C++'</div>
          <div class="default-tokens">,</div>
          <div class="strings">'Go Lang'</div>
          <div class="default-tokens">,</div>
          <div class="strings">'MySQL'</div>
          <div class="default-tokens">,</div>
          <div class="strings">'GIT'</div>
          <div class="default-tokens animate-pulse  delay-0 duration-0"> |</div>

        </div>
        <div class="line">
          <div class="default-brackets">&emsp;&emsp;&emsp;&emsp;&emsp;]</div>
          <div class="default-tokens">;</div>
        </div>
        <div class="line">
          <div class="scope-brackets">&emsp;&emsp;}</div>
          <div class="default-tokens">;</div>
        </div>
        <div class="line">
          <div class="scope-brackets">&emsp;}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-moz-selection { /* Code for Firefox */
  color: white;
  background: black;
}

::selection {
  color: white;
  background: black;
}

.code-wrap {
  list-style-type: none;
  counter-reset: css-counter 0;
}

.code-wrap > div.line {
  padding: 0 .5rem;
  counter-increment: css-counter 1;
}

.code-wrap > div.line:before {
  content: counter(css-counter, decimal-leading-zero) " ";
}

.code-wrap > div.line:hover {
  --code-opacity: 1;
  background: rgb(15 23 42 / var(--code-opacity));
}

.code-wrap * div:not(.line) {
  font-family: monospace;
  font-size: 17px;
  display: inline-block;
  width: auto;
  tab-size: 4;
}
.line{
  overflow-x: scroll;
  width: 100%;
  scrollbar-width: none;
  text-wrap: nowrap;
}
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.line::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.line {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.line *:not(.props,.dot-child) {
  padding-left: 2px;
}

.keywords {
  color: rgb(198, 120, 221);
}

.class-name {
  color: rgb(229, 192, 123);
}

.props {
  color: rgb(224, 108, 117);
}

.methods {
  color: rgb(97, 175, 239);
}

.comments {
  color: rgb(92, 99, 112);
}

.vars {
  color: rgb(171, 178, 191);
}

.strings {
  color: rgb(152, 195, 121);
}

.scope-brackets {
  color: rgb(171, 178, 191);
}

.parenthesis {
  color: rgb(171, 178, 191);
}

.default-brackets {
  color: rgb(171, 178, 191);
}

.default-tokens {
  color: rgb(171, 178, 191);
}

.dot-child {
  color: rgb(171, 178, 191);
}

.assign {
  color: rgb(171, 178, 191);
}

.int {
  color: rgb(209, 154, 102);
}
</style>