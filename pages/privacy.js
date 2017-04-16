import Page from '../components/page';

export default () => (
    <Page title="Privacy Policy">
        <section className="section">
            <div className="container content">
                <h1>Privacy Policy</h1>

                <h2>What is Buttercup</h2>
                <p>Buttercup is a password and credentials manager, which is made up by several applications and services. Secure information (passwords and other stored login details) are encrypted and stored in <strong>archive files</strong>. These archive files are used by the various software applications provided by Buttercup. Archives may be synchronised between multiple devices using either a user-operated hosting service or a <strong>My Buttercup</strong> hosted account.</p>

                <h3>Archive Encryption and Security</h3>
                <p>Archives are encrypted using extremely strong modern encryption methods by using a password provided by the user. Files are encrypted <u>on the user’s device</u> before being synchronised using any of services mentioned earlier. Archives can only be decrypted by using the user’s secret password. There is no way to bypass encryption or to open the archive without the original password. The user is responsible for their password choice in terms of strength.</p>
                
                <h2>What data is provided to and used by Buttercup</h2>
                <p>Buttercup uses only the bare minimum information necessary to function in a user-friendly manner. No data is shared with other parties and no analytics is recorded during operation of any end product produced by Buttercup.</p>
                
                <h3>Using 3rd party synchronisation</h3>
                <p>When using a synchronisation method outside of My Buttercup, no user-specific information is requested or stored. Any data entered by the user in any of the Buttercup applications is kept in that application and not transferred from the user’s device. Contents in the user’s archive(s) is always encrypted using their secret password before being stored in a user-chosen synchronisation service.</p>

                <h3>Using My Buttercup accounts and synchronisation</h3>
                <p>When using the hosted alternative, My Buttercup only stores the user’s email address and their securely-hashed password (SHA-256). All other information is optional and not specific to the user. Archives stored in the My Buttercup service are <u>already encrypted before they reach the My Buttercup servers</u> and are not accessible by anyone other than the user (with their password).</p>
                
                <h2>Buttercup application data use</h2>

                <h3>Buttercup desktop application</h3>
                <p>The desktop application allows users to create and use local/remote archives. Only the password, keyfile or both will be requested from the user - these are used to encrypt and decrypt their archive file. The user may be prompted for their synchronisation account information for storing the archive and this information is stored locally in encrypted form. The archive itself may be synchronised using a file sync service (like Dropbox/ownCloud etc.) of the user’s choice using their own account. The archive that is written to the synchronisation service is already encrypted before sending.</p>
                <p>No unencrypted data is written to the archive. No user information is written to the archive besides the credentials they choose to store in the archive. No analytics are recorded during operation of the application.</p>

                <h3>Buttercup browser extension</h3>
                <p>The browser extension allows users to create and use remote archives. Only the master password and archive name is requested by the user when adding an archive. The user may be requested for cloud synchronisation information for use with their choice of file synchronisation service provider, and these details are stored locally in encrypted form.</p>
                <p>No unencrypted data is written to the archive. No user information is written to the archive besides the credentials they choose to store in the archive. No analytics are recorded during operation of the application.</p>
            </div>
        </section>
    </Page>
);
