function test_case3(count){
  var rows = 5, k = 0, count1 = 0; //1
  for (var i = 1; i <= rows; ++i) { //2
      {
          for (var space = 1; space <= rows - i; ++space) { //3, 4
              {
                  console.info(" "); //5
                  ++count;
              };
          }
          while ((k !== 2 * i - 1)) { //6
              {
                  if (count <= rows - 1) { //7
                      console.info((i + k) + " "); //8
                      ++count;
                      return 1;
                  }
                  else { //9
                      ++count1;
                      console.info((i + k - 2 * count1) + " ");
                      return 0;
                  }
                  ++k; //10
              }
          };
          count1 = count = k = 0; //11
          console.info();
      };
  };
}
module.exports = test_case3;
