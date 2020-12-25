# Docker Grocery

A simple grocery app running across multiple Docker containers

[![GitHub Release](https://img.shields.io/github/release/iselab-dearborn/docker-grocery.svg)](https://github.com/iselab-dearborn/docker-grocery/releases/latest)
[![GitHub contributors](https://img.shields.io/github/contributors/iselab-dearborn/docker-grocery.svg)](https://github.com/iselab-dearborn/docker-grocery/graphs/contributors)
[![GitHub stars](https://img.shields.io/github/stars/iselab-dearborn/docker-grocery.svg)](https://github.com/iselab-dearborn/docker-grocery)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)


## Getting started

Download [Docker Desktop](https://www.docker.com/products/docker-desktop) for Mac or Windows. [Docker Compose](https://docs.docker.com/compose) will be automatically installed. On Linux, make sure you have the latest version of [Compose](https://docs.docker.com/compose/install/).

Clone this project and run it in this directory:

```
docker-compose up -d
```

The web app will be running at [http://localhost:8081](http://http://localhost:8081).

## Screenshots

If everything is running ok, you will see the following screen if you access `http://localhost:8081`

<kbd>
    <img src="https://user-images.githubusercontent.com/114015/103142130-61062f00-46cc-11eb-9a49-d2f3be7fe8ca.png"/>
</kbd>

## Architecture

![output](https://user-images.githubusercontent.com/114015/103141869-c48e5d80-46c8-11eb-891f-59cd893a487c.png)

- **web**: a front-end web app in Node.js which lets you access the list of products

- **creator**: A tool in Node.js responsible for storing products every 5 seconds.

- **api**: a REST api used for accessing the database

- **mongodb**: the MongoDB database

- **mongodbexpress**: a web-based MongoDB admin interface

## Questions or Suggestions

Feel free to create <a href="https://github.com/iselab-dearborn/docker-grocery/issues">issues</a> here as you need

## Contribute

Contributions to the this project are very welcome! We can't do this alone! Feel free to fork this project, work on it and then make a pull request.

## Authors

* **Thiago Ferreira** - *Initial work*

See also the list of [contributors](https://github.com/iselab-dearborn/docker-grocery/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Powered by

<p float="left">
    <img src="https://user-images.githubusercontent.com/114015/77862143-99351b80-71e7-11ea-84b2-62038634f314.png" height="58px"/>
</p>
