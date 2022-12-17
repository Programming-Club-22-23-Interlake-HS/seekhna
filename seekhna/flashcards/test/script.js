       //global varriables
      let timeWhenFlashcardsPageWasLoaded;
      let showElapsedTimeIntervalFunction;
       
       // *************************************** GENERAL ***************************************

       const switchToWindow = (windowName) => {
        const mainpageSection = document.querySelector('.mainpage');
        const learnpageSection = document.querySelector('.learnpage');
        const flashcardsSection = document.querySelector('.flashcards-page');
        const flashcardsStatisticsSection = document.querySelector('.flashcards-statistics-page');
        const loadingScreenSection = document.querySelector('.loading-screen');

        switch (windowName) {
          case 'mainpage':
          mainpageSection.style.display = 'block';
          learnpageSection.style.display = 'none';
          flashcardsSection.style.display = 'none';
          flashcardsStatisticsSection.style.display = 'none';
          loadingScreenSection.style.display = 'none';
          break;

          case 'learnpage':
          mainpageSection.style.display = 'none';
          learnpageSection.style.display = 'block';
          flashcardsSection.style.display = 'none';
          flashcardsStatisticsSection.style.display = 'none';
          loadingScreenSection.style.display = 'none';
          break;

          case 'flashcards':
          mainpageSection.style.display = 'none';
          learnpageSection.style.display = 'none';
          flashcardsSection.style.display = 'block';
          flashcardsStatisticsSection.style.display = 'block';
          loadingScreenSection.style.display = 'none';

          //save the current time
          const d = new Date();
          timeWhenFlashcardsPageWasLoaded = d.getTime();
          //enable setInterval function
          showElapsedTimeIntervalFunction = setInterval(showElapsedTime, 1000);
          break;

          case 'loading-screen':
          const mainpageHeight = mainpageSection.offsetHeight;
          mainpageSection.style.display = 'none';
          learnpageSection.style.display = 'none';
          flashcardsSection.style.display = 'none';
          flashcardsStatisticsSection.style.display = 'none';
          loadingScreenSection.style.display = 'flex';
          loadingScreenSection.style.height = `${mainpageHeight}px`;
          break;

          default:
            console.error(`Problem with switchToWindow().`);
          break;
        }
       }




       const returnBtn = document.querySelectorAll('.return-button');
       const returnToMainpage = () => {
        switchToWindow('mainpage');
        clearArrays();
        clearTheTable();
        //FLASHCARDS STATISTICS -> RESET VALUES
        clearInterval(showElapsedTimeIntervalFunction); //disable setInterval function
        timeWhenFlashcardsPageWasLoaded = 0; //reset time
        textboxCorrectAnswers.textContent = '-';
        textboxElapsedTime.textContent = '0 min 0 sec';

        correctAnswers = 0;
        uncorrectAnswers = 0;
       }
       returnBtn[0].addEventListener('click', returnToMainpage); //button on learnpage
       returnBtn[1].addEventListener('click', returnToMainpage); //button on flashcards page
       

       function changeHeightOfBody() {
        const body = document.body;
        const html = document.documentElement;
    
        body.style.height = 'auto'; //reset body height
    
        let totalHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight );
        //totalHeight == total height of the page
        //body.offsetHeight == actual height of body
    
        body.style.height = `${totalHeight}px`; //set new height
    }
        setInterval(changeHeightOfBody, 10);


      //DYNAMIC CHANGAING CONTENT-CONTAINER WIDTH
        const contentContainer = document.querySelector('.content-container');
        const flashcardsStatisticsContainer = document.querySelector('.flashcards-statistics-page');

        function autoSetContentContainerWidth () {
        const widthOfDoc = document.body.clientWidth;
        const widthOfContentContainer = contentContainer.offsetWidth;

        if (widthOfDoc < 1550 && widthOfDoc > 760)
        {
          const pixelsToPercents = (1550-widthOfDoc)*0.05;
          const percents = 50+pixelsToPercents;

          contentContainer.style.width=`${percents}%`;
          flashcardsStatisticsContainer.style.width=`${percents}%`;
        }
      }
      autoSetContentContainerWidth(); //call function once at the beginning
      window.addEventListener('resize', autoSetContentContainerWidth);

       // ************************************* END GENERAL *************************************
       

       // *************************************** MAINPAGE ***************************************
       const selectUser = document.querySelector('.select-database');
       const selectTable = document.querySelector('.select-table');
       const selectMode = document.querySelector('.select-mode');
       const startBtn = document.querySelector('.start-button');


       const displayUserTables = (user) => {
        switch (user) {
          case "math.sqlite":
            selectTable.innerHTML = `
                <option value="algebra1">Algebra 1</option>
                <option value="school">school</option>
                <option value="travelling">travelling</option>
                `;
            break;
      
          case "ss.sqlite":
            selectTable.innerHTML = `
                  <option value="Unit1">Unit 1</option>
                  <option value="Unit2">Unit 2</option>
                  `;
            break;
      
          default:
            console.error(`Problem with displayUserTables().`);
            break;
        }
      };

      //load at the beggining in 'Select the table' tables of user math.sqlite
      displayUserTables(selectUser.value)

      let databaseFile;
      let tableName;
       const startButtonPressed = () => {
        databaseFile = selectUser.value;
        tableName = selectTable.value;
        const selectedMode = selectMode.value;
        if (selectedMode === 'learnpage') {
          switchToWindow('loading-screen');
          getDataFromDatabase(databaseFile,tableName);
          //delay - waiting for loading database
          setTimeout(() => {fillTheTable(); switchToWindow('learnpage');}, 2500);
        }
        else if (selectedMode === 'flashcards') {
          switchToWindow('loading-screen');
          getDataFromDatabase(databaseFile,tableName);
          //delay - waiting for loading database
          setTimeout( () => {getRandomNumberOfRecord(); showCard('check'); switchToWindow('flashcards');}, 2500);
        }
        else {
          console.error(`Problem with displayUserTables().`);
        }
       }


       selectUser.addEventListener('change', function () {displayUserTables(selectUser.value);});
       startBtn.addEventListener('click',startButtonPressed);

        // *************************************** END MAINPAGE ***************************************
      
      // *************************************** DATABASE ***************************************

      //global varriables
       let ID = [];
       let term1 = [];
       let term2 = [];
       let term3 = [];
       let ans1 = [];
       let ans2 = [];
       let ans3 = [];
       
       let term123 = [];
       let ans123 = [];



       function clearArrays() {
        ID.splice(0,ID.length);
        term1.splice(0,term1.length);
        term2.splice(0,term2.length);
        term3.splice(0,term3.length);
        ans1.splice(0,ans1.length);
        ans2.splice(0,ans2.length);
        ans3.splice(0,ans3.length);

        term123.splice(0,term123.length);
        ans123.splice(0,ans123.length);
       }

      async function getDataFromDatabase(databaseName, databaseTable) {

      // Load sqj.js module and database
      const sqlPromise = initSqlJs({
        locateFile: (file) => `./${file}`,
      });
      const dataPromise = fetch(`./database/${databaseName}`).then((res) =>
        res.arrayBuffer()
      );
      const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
      const db = new SQL.Database(new Uint8Array(buf));
      
      //get table length
      let numberOfRecords = db.exec(`SELECT COUNT() FROM ${databaseTable}`);
      numberOfRecords = parseInt(numberOfRecords[0].values[0]);

      //put all data to arrays
      let response;
      for (let i=0; i<numberOfRecords; i++) {
        //ID
        ID.push(i+1);
        //term1
        response = db.exec(`SELECT term1 FROM ${databaseTable} LIMIT 1 OFFSET ${i}`);
        response = response[0].values[0].toString();
        term1.push(response);
        //term2
        response = db.exec(`SELECT term2 FROM ${databaseTable} LIMIT 1 OFFSET ${i}`);
        response = response[0].values[0].toString();
        term2.push(response);
        //term3
        response = db.exec(`SELECT term3 FROM ${databaseTable} LIMIT 1 OFFSET ${i}`);
        response = response[0].values[0].toString();
        term3.push(response);
        //ans1
        response = db.exec(`SELECT ans1 FROM ${databaseTable} LIMIT 1 OFFSET ${i}`);
        response = response[0].values[0].toString();
        ans1.push(response);
        //ans2
        response = db.exec(`SELECT ans2 FROM ${databaseTable} LIMIT 1 OFFSET ${i}`);
        response = response[0].values[0].toString();
        ans2.push(response);
        //ans3
        response = db.exec(`SELECT ans3 FROM ${databaseTable} LIMIT 1 OFFSET ${i}`);
        response = response[0].values[0].toString();
        ans3.push(response);

        //term123
        if (term1[i] != "" && term2[i] != "" && term3[i] != "") {
          term123.push(`${term1[i]} / ${term2[i]} / ${term3[i]}`);
        }
        else if (term1[i] != "" && term2[i] != "") {
          term123.push(`${term1[i]} / ${term2[i]}`);
        }
        else {
          term123.push(`${term1[i]}`);
        }
        //ans123
        if (ans1[i] != "" && ans2[i] != "" && ans3[i] != "") {
          ans123.push(`${ans1[i]} / ${ans2[i]} / ${ans3[i]}`);
        }
        else if (ans1[i] != "" && ans2[i] != "") {
          ans123.push(`${ans1[i]} / ${ans2[i]}`);
        }
        else {
          ans123.push(`${ans1[i]}`);
        }

      }
      }

      // *************************************** END DATABASE ***************************************


      // *************************************** LEARNPAGE ***************************************
      const learnpageTable = document.querySelector('.learnpage > .table-container > table');
      const learnpageTableName = document.querySelector('.current-table-name');
      const printBtn = document.querySelector('.print-table-btn');

      const fillTheTable = () => {
        learnpageTableName.textContent = selectTable.value;
        
         for (let i=0; i<ID.length; i++) {
        learnpageTable.innerHTML += `
        <tr>
        <td>${ID[i]}</td>
        <td>${term123[i]}</td>
        <td>${ans123[i]}</td>
        </tr>
        `;
        }
      }

      const clearTheTable = () => {
        learnpageTable.innerHTML = `
        <tr>
        <th>ID</th>
        <th>ENGLISH</th>
        <th>POLISH</th>
        </tr>
        `;
      }

      
      const printTheTable = () => {
        const divToPrint = document.querySelector('.table-container');
        const logo = document.querySelector('nav');

        let newWin;
        newWin= window.open("");
        newWin.document.write('<title>Vocabulary to learn</title>');
        newWin.document.write(logo.outerHTML);
        newWin.document.write(divToPrint.outerHTML);
        const tableStyle = `
        <style>
        nav > h1 {
          text-align: center;
          font-family: "Signika", serif;
          font-weight: 700;
          font-size: 3rem;
        }

        .table-container > p {
          font-size: 1.5rem;
          width: 90%;
          padding-bottom: 5px;
        }
        
        .table-container > p:hover {
          cursor: default;
        }
        
        table,
        th,
        td {
          border: 1px solid black;
          border-collapse: collapse;
          font-size: 1rem;
        }
        
        .table-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        table {
          width: 90%;
        }
        
        th,
        td {
          padding: 5px;
          text-align: center;
        }
        <style>
        `;

        newWin.document.write(tableStyle);
        newWin.document.close();
        newWin.print();
        newWin.close();
        }

        
        printBtn.addEventListener('click', printTheTable);



        //*** SCROLL-UP BUTTON ***
            const scrollUpButton = document.querySelector('.scrollUpBtn');

            //When user scrolls down 100px from the top of the document, show the button
            window.onscroll = function() {scrollFunction()};

            const scrollFunction = () => {
              if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollUpButton.style.display = "block";
              } else {
                scrollUpButton.style.display = "none";
              }
            }

            //Scroll to the top of the document
            function topFunction() {
              document.body.scrollTop = 0; // for Safari
              document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
            }
            scrollUpButton.addEventListener('click', topFunction);

        // *** END SCROLL-UP BUTTON ***

        


      // ************************************* END LEARNPAGE *************************************



      // *************************************** FLASHCARDS ***************************************

      const userTranslation = document.querySelector('.user-translation');
      const cardContent = document.querySelector('.card-content');
      const btnCheck = document.querySelector('.btn-check');
      const checkCardOriginalMeaning = document.querySelector('.original-meaning');
      const resultCardOriginalMeaning = document.querySelector('.result-original-meaning');
      const resultCardUserTranslation = document.querySelector('.result-user-translation');
      const resultCardParagraph = document.querySelector('.result-paragraph');
      const resultCard = document.querySelector('.result-card');

      let randomNumberOfRecord;
      const getRandomNumberOfRecord = () => {
          const lastNumber = randomNumberOfRecord;
          while (lastNumber === randomNumberOfRecord) //always take the new number
          {
          randomNumberOfRecord = Math.floor(Math.random() * ID.length);
          }
      }

      let correctAnswers = 0;
      let uncorrectAnswers = 0;
      const checkCorrectnessOfTranslation = () => {
        if (userTranslation.value != '' && (userTranslation.value === term1[randomNumberOfRecord] || userTranslation.value === term2[randomNumberOfRecord] || userTranslation.value === term3[randomNumberOfRecord]))
        {
          correctAnswers ++;
          showCard('green');
        }
        else {
          if (checkCardOriginalMeaning.textContent != '') {uncorrectAnswers ++;} //situation when database is not ready yet
          showCard('red');
        }
        displayStatisticsOfCorrectAnswers(correctAnswers, uncorrectAnswers);
      }


      let currentlyDisplayedCard;
      const showCard = (type) => {
        switch (type) {
          case 'check':
            checkCardOriginalMeaning.textContent = ans123[randomNumberOfRecord];
            userTranslation.value = '';
            userTranslation.focus(); //automatically set cursor in input
            btnCheck.innerHTML = 'Check (Enter)';
            cardContent.style.transform='rotateY(0deg)';
            currentlyDisplayedCard = 'check';
          break;

          case 'red':
            resultCardOriginalMeaning.textContent = ans123[randomNumberOfRecord];
            resultCardUserTranslation.textContent = `❌ ${userTranslation.value}`;
            resultCardParagraph.textContent = `✅ ${term123[randomNumberOfRecord]}`;
            resultCard.style.background = '#751b1b'; //red
            btnCheck.innerHTML = 'Try again (Enter)';
            cardContent.style.transform='rotateY(-180deg)';
            currentlyDisplayedCard = 'red';
          break;

          case 'green':
            resultCardOriginalMeaning.textContent = ans123[randomNumberOfRecord];
            resultCardUserTranslation.textContent = `✅ ${term123[randomNumberOfRecord]}`;
            resultCardParagraph.textContent = "";
            resultCard.style.background = '#0f6e35'; //green
            btnCheck.innerHTML = 'Next card (Enter)';
            cardContent.style.transform='rotateY(-180deg)';
            currentlyDisplayedCard = 'green';
          break;
          
          default:
            console.error('Problem with showCard().');
            break;
        }
      }

      const btnCheckClicked = () => {
        if (currentlyDisplayedCard === 'check') {
          checkCorrectnessOfTranslation();
        }
        else if (currentlyDisplayedCard === 'red') {
          showCard('check'); //with the same word to translate
        }
        else if (currentlyDisplayedCard === 'green') {
          getRandomNumberOfRecord();
          showCard('check');
        }
        else {
          console.error('Problem with btnCheckClicked().');
        }
      }


      // *** The bottom button can be activated by 'click' or pressing 'enter' ***
      const enterKeyAction = (event) => {
        if (event.key === 'Enter') {
          btnCheck.click();
      }
    }
      userTranslation.addEventListener('keypress', enterKeyAction);
      btnCheck.addEventListener('click', btnCheckClicked);


      // *************************************** END FLASHCARDS ***************************************




      // ********************************** FLASHCARDS STATISTICS PAGE - COUNT LEARNING TIME **********************************

      const textboxCorrectAnswers = document.querySelector('.correct-answers');
      const textboxElapsedTime = document.querySelector('.elapsed-time');

      /* FUNCTION THAT CONVERTS E.G. '3' MINS INTO '03' MINS */
      const addLeadingZeros = (num, totalLength) => String(num).padStart(totalLength,'0');
      

      const convertMilisecondsToMinutesAndSeconds = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        return `${minutes} min ${addLeadingZeros(seconds,2)} sec`;
      }


      const showElapsedTime = () => {
        const dateNow = new Date();
        let currentElapsedTimeInMiliseconds = dateNow.getTime() - timeWhenFlashcardsPageWasLoaded;
        textboxElapsedTime.textContent = convertMilisecondsToMinutesAndSeconds(currentElapsedTimeInMiliseconds);
      }

      // ******************************** END FLASHCARDS STATISTICS PAGE - COUNT LEARNING TIME ********************************




      // ********************************** FLASHCARDS STATISTICS PAGE - SHOW EFFICIENCY **********************************

      //FUNCTION THAT CONVERTS PERCENTS TO COLOR (0% == RED; 50% == YELLOW; 100% == GREEN)
      // License: MIT - https://opensource.org/licenses/MIT
      // Author: Michele Locati <michele@locati.it>
      // Source: https://gist.github.com/mlocati/7210513
      function perc2color(perc) {
        let r, g, b = 0;
        if(perc < 50) {
          r = 255;
          g = Math.round(5.1 * perc);
        }
        else {
          g = 255;
          r = Math.round(510 - 5.10 * perc);
        }
        let h = r * 0x10000 + g * 0x100 + b * 0x1;
        return '#' + ('000000' + h.toString(16)).slice(-6);
      }


      const displayStatisticsOfCorrectAnswers = (correctAns, uncorrectAns) => {
        const totalAns = correctAns + uncorrectAns;
      
        if (totalAns === 0) //dividing by 0
        {
          textboxCorrectAnswers.textContent = '-';
        }
        else {
          let efficiency = correctAns/totalAns*100; //efficiency in %
          if (!Number.isInteger(efficiency)) {efficiency = efficiency.toFixed(2);} //don't show .00 when number is integer
          textboxCorrectAnswers.textContent = `${correctAns}/${totalAns} [${efficiency}%]`;
          textboxCorrectAnswers.style.color = perc2color(efficiency);
        }
      }

      // ******************************** END FLASHCARDS STATISTICS PAGE - SHOW EFFICIENCY ********************************
    