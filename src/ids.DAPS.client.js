module.exports = ({
                      'hrt':    hrt = () => (Date.now()).valueOf() / 1000,
                      'config': config
                  }) => {

    //const ; // const

    //region fn

    //endregion fn

    class DAPSclient {

        #request = null;

        #protocol = "http";
        #schema   = "https";
        #host     = "localhost";
        #port     = 80;
        #DAT      = null;

        #refresh_interval = (60 * 60)

        constructor({
                        'request':          request
                        ,
                        'protocol':         protocol = "http",
                        'schema':           schema = "https",
                        'host':             host = "localhost",
                        'port':             port = 80
                        ,
                        'refresh_interval': refresh_interval = (60 * 60)
                    }) {

            this.#request = request;

            this.#protocol = protocol;
            this.#schema   = schema;
            this.#host     = host;
            this.#port     = port;

            this.#refresh_interval = refresh_interval;

        } // constructor

        get protocol() {
            return this.#protocol;
        }

        get schema() {
            return this.#schema;
        }

        get host() {
            return this.#host;
        }

        get port() {
            return this.#port;
        }

        get DAT() {
            return this.#DAT;
        }

        requestDAT({'requestToken': requestToken, 'timeout': timeout = 5000}) {
            return new Promise((resolve, reject) => {
                try {
                    //this.#request
                    //REM: supress commit warings
                    requestToken = null;
                    timeout      = null;
                    reject(new Error(`NOT implemented`));
                    resolve();
                } catch (jex) {
                    reject(jex);
                } // try
            }); // return P
        } // requestDAT()

    } // class DAPSclient

    //REM: supress commit warings
    hrt();

    Object.seal(DAPSclient);

    return ((config) ? new DAPSclient(config) : DAPSclient);

}; // module.exports :: module.DAPSclient