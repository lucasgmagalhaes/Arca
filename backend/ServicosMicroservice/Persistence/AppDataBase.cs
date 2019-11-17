namespace Persistence
{
    public static class AppDatabase
    {
        public static string Server { get; set; }
        public static string Database { get; set; }
        public static string UserId { get; set; }
        public static string Password { get; set; }


        public static void SetConnection(string server, string database, string userId, string password)
        {
            AppDatabase.Server = server;
            AppDatabase.Database = database;
            AppDatabase.UserId = userId;
            AppDatabase.Password = password;
        }

        public static string GetConnection()
        {
            if (string.IsNullOrEmpty(UserId) || string.IsNullOrEmpty(Password))
            {
                return "Server=" + Server + ";Database=" + Database
                + ";Trusted_Connection=Yes;";
            }

            return "Server=" + Server + ";Database=" + Database
                + ";User ID=" + UserId + ";Password=" + Password + ";";
        }
    }
}
