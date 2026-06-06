<?php

namespace Thanhnt\Akhoglobal\Actions\Config;

use Thanhnt\Akhoglobal\Models\Config;
use Thanhnt\Akhoglobal\Models\Types\ConfigInterface;

final class ConfigAction
{

	public function updateConfigs(array $configData)
	{
		// Logic to update config in database
		// Example: 
		foreach ($configData as $key => $value) {
			// Assuming you have a Config model to handle configurations
			Config::updateOrCreate([ConfigInterface::_PATH => $key], [ConfigInterface::_VALUE => $value]);
		}

		return true;
	}

	public function getConfig(string $key)
	{
		// Logic to retrieve config from database
		// Example: 
		return Config::where(ConfigInterface::_PATH, $key)->first();
	}

	public function deleteConfig(string $key)
	{
		// Logic to delete config from database
		// Example: 
		return Config::where(ConfigInterface::_PATH, $key)->delete();
	}

	public function getAllConfigs()
	{
		// Logic to retrieve all configs from database
		// Example: 
		return Config::all();
	}

	/**
	 * Additional methods for specific config types can be added here
	 * For example, if you have different types of configs, you can create methods like getConfigByType(string $type)
	 * @return array|Config|null
	 */
	public function registerConfig(array $configData)
	{
		// Logic to create new config in database
		// Example:
		if (empty($configData[ConfigInterface::_PATH])) {
			return null;
		}
		return Config::firstOrCreate([ConfigInterface::_PATH => $configData[ConfigInterface::_PATH]], $configData);
	}
}
