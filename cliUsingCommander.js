const fs = require('fs')
const {Command} = require('commander')
const program = new Command()

program
      .name('Count')
      .description('File related CLI tasks')
      .version("1.0.0")

program
  .command("count_words")
  .description("This CLI will count the number of words in the given file")
  .argument('<file>' , 'file to count words')
  .action((filePath)=>{
      fs.readFile(filePath , "utf-8" , (err , data)=>{
        if(err) console.log("wrong INPUT")
          else console.log("There are "+data.split(/\s+/).length+ " words in this file")
      })
  })

  program.parse()