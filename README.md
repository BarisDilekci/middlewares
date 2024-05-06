## Steps to Run the Project

1. In the project's root directory, initialize a `package.json` file by running the following command:

    ```bash
    npm init
    ```

2. If necessary, update dependencies in the project by running the following command:

    ```bash
    npm update -y
    ```

3. Build the Docker image by running the following command:

    ```bash
    docker build -t app .
    ```

4. Start the Docker container by running the following command:

    ```bash
    docker run -p 3000:3000 app
    ```

5. Open your web browser and go to [localhost:3000](http://localhost:3000).

