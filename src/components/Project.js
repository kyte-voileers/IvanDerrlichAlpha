import React from 'react';

const Project = ({ clickHandler, properties }) => {
  const {
    repoName,
    repoNameURL,
    breakPointPx,
    imageWidthMobile,
    imageWidthDesktop,
    deployURL,
    textLeft,
  } = properties;

  const baseImageURL = 'https://raw.githubusercontent.com/IvanDerlich/';
  const endImageURL = '/master/docs/1.gif';
  const imageURL = baseImageURL + repoNameURL + endImageURL;

  const baseRepoURL = 'https://github.com/IvanDerlich/';
  const repoURL = baseRepoURL + repoNameURL;

  const baseFetchURL = 'https://raw.githubusercontent.com/IvanDerlich/';
  const endFetchURL = '/master/README.md';
  const fetchURL = baseFetchURL + repoNameURL + endFetchURL;

  const markdownId = `mark-down-${repoNameURL}`;
  const descriptionInsertionId = `description-insertion-${repoNameURL}`;
  const techInsertionId = `tech-insert-point-${repoNameURL}`;

  let imageWidth = imageWidthDesktop;
  if (window.innerWidth < breakPointPx) {
    imageWidth = imageWidthMobile;
  }

  fetch(fetchURL)
    .then((response) => response.body)
    .then((body) => body.getReader())
    .then((reader) => reader.read())
    .then((read) => {
      const markdown = String.fromCharCode.apply(null, read.value);
      // console.log(repoName)
      /* 
            <> Begining of comment
            Try to improve this section by creating a regular expression that:
            - Parses the markdown string stream,
            - Finds an ocurrence of `#description-${repoNameURL}`
            - Extracts the line
            - Extract string between > <
          */
      // console.log(`#description-${repoNameURL}`)
      document.getElementById(markdownId).innerHTML = markdown;
      // console.log(`#description-${repoNameURL}`)
      const descriptionElement = document.querySelector(
        `#description-${repoNameURL}`
      );

      const description = descriptionElement.innerHTML;
      document.getElementById(descriptionInsertionId).innerHTML = description;

      const techList = document.querySelector(`#tech-list-${repoNameURL}`);
      const techListInsertionPoint = document.getElementById(techInsertionId);
      // console.log(techListInsertionPoint)
      // console.log(techList)
      if (techListInsertionPoint && techList) {
        techListInsertionPoint.appendChild(techList);
        techList.classList.add('tags');
      }
      // </> End of comment
    });

  const openNewTab = clickHandler;

  return (
    <div className="container">
      <div className="imgDiv outView">
        <img src={imageURL} alt={'Project'} />
      </div>
      <div className={`description ${textLeft ? 'reverse' : ''}`}>
        <div className="title">{repoName}</div>
        <div className="text" id={descriptionInsertionId} />
        <div className="tags" id={techInsertionId} />
        <a
          onMouseDown={clickHandler}
          onClick={clickHandler}
          href={repoURL}
          className="link"
        >
          See Project
        </a>
        <a
          onClick={openNewTab}
          onMouseDown={openNewTab}
          href={deployURL}
          className="link"
        >
          Live Version
        </a>
      </div>
      <div id={markdownId} className="markdown-insertion" />
    </div>
  );
};

export default Project;
