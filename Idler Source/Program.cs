using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using Steamworks;

namespace steam_idle
{
    static class Program
    {
        [STAThread]
        static void Main(string[] args)
        {
            long appId = long.Parse(args[0]);
            Environment.SetEnvironmentVariable("SteamAppId", appId.ToString());

            if (!SteamAPI.Init())
            {
                Console.WriteLine("SteamAPI.Init() failed!");
                
            }
            Environment.SetEnvironmentVariable("SteamAppId", appId.ToString());

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new frmMain(appId));
        }
    }
}
